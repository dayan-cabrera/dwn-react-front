import React, { useState } from "react";
import { CheerioDownloadService } from "../services/CheerioDownloadService";

const DownloadFromVisuales: React.FC = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false); // Estado adicional para el spinner

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const downloadFiles = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setIsDownloading(true); // Mostrar el spinner
      const service = new CheerioDownloadService(url);

      await service.fetchImageNames(); // Esperar a que se complete la llamada

      setIsLoading(false);
      setIsDownloading(false); // Ocultar el spinner
      setUrl("");
    } catch (error) {
      setUrl("");
      setIsLoading(false);
      setIsDownloading(false); // Ocultar el spinner en caso de error
      console.log("error");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="relative h-screen w-screen">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="section light-color-gradient flex flex-col justify-center items-center">
          <form
            onSubmit={downloadFiles}
            className="w-8/12 h-full p-10 mb-28 flex flex-col justify-center items-center"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="border-b border-gray-900 w-full flex flex-col justify-center items-center pb-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Type the url of the folder
              </label>
              <input
                type="text"
                name="url"
                id="url"
                autoComplete="url"
                className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="https://"
                value={url}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="p-3 mt-5 w-1/3 shadow-lg shadow-gray-500/50 bg-green-600 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
                disabled={isDownloading} // Deshabilitar el botón mientras se descarga
              >
                {isDownloading ? "Downloading..." : "Download"}{" "}
                {/* Mostrar el spinner o el texto "Download" */}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DownloadFromVisuales;
