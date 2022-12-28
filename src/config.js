export const backendApi = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:5000";
  } else {
    return "https://dead-plum-pigeon-hose.cyclic.app";
  }
}