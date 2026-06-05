import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = () => {
  // Укажите здесь URL до вашего Swagger/OpenAPI файла.
  // Это может быть как ссылка на ваш backend (например, http://localhost:5000/swagger.json),
  // так и путь к локальному .json файлу в папке public.
  const swaggerUrl = "http://localhost:5000/swagger/v1/swagger.json";

  return (
    <div className="api-docs-container">
      {/* Рендерим компонент SwaggerUI, передав ему URL спецификации */}
      <SwaggerUI url={swaggerUrl} />
    </div>
  );
};

export default ApiDocs;