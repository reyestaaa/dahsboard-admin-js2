const app = window.location.origin.includes("localhost") ? "http://localhost:8812/api/v1" : "http://172.18.49.40/api/v1"

export { 
    app 
} 