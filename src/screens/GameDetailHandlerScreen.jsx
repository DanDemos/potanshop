import { useSelector } from "react-redux";
import GameDetailPage from "./gamedetail/GameDetailPage";
import GameDetailPageMM from "./gamedetail/GameDetailPageMM";

const GameDetailHandlerScreen = () => {
  const language = useSelector((state) => state?.languageSlice);
  if (language == "en") {
    return <GameDetailPage />;
  } else {
    return <GameDetailPageMM />;
  }
};

export default GameDetailHandlerScreen;
