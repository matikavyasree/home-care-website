import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import BackToTop from "./components/common/BackToTop";
import CallButton from "./components/common/CallButton";
import WhatsAppButton from "./components/common/WhatsAppButton";
function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
       <BackToTop />
       <WhatsAppButton />
       <CallButton />
      

    </>
  );
}

export default App;