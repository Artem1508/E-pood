import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = () => {
  const swaggerUrl = "http://localhost:5000/swagger/v1/swagger.json";

  return (
    <div className="api-docs-container">
      <SwaggerUI url={swaggerUrl} />
    </div>
  );
};

export default ApiDocs;