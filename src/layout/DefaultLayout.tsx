import { useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";
import { RingLoader } from "react-spinners";
import Footer from "./footer/Footer";
import LoadingComponent from "../components/loading/LoadingComponent";
import Header from "./header/Header";
import SnowflakesEffect from "./effect/SnowflakesEffect";

interface DefaultLayoutProps {
  children: React.ReactNode;
  loadingGroup?: string | number;
}
// eslint-disable-next-line react/prop-types
export default function DefaultLayout({
  children,
  loadingGroup,
}: DefaultLayoutProps): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <SnowflakesEffect />
      {/* Top Bar */}
      {/* <TopBar /> */}

      {/* Header */}
      <Header />

      {/* Main Content Section */}

      <main className="mt-[59px]">
        <LoadingComponent
          type="hide"
          loadingGroup={loadingGroup}
          loadingDesign={
            <div className="flex items-center justify-center min-h-screen">
              <RingLoader size={64} color="#298fef" />
            </div>
          }
        >
          {children}
        </LoadingComponent>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}