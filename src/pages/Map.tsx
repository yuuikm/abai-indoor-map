import IndoorMapWrapper from "components/IndoorMapWrapper";
import MobileRouteDetails from "components/MobileRouteDetails";
import Toolbar from "components/Toolbar";
import useMapData from "hooks/useMapData";
import { createContext, useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import {
  MapDataContextType,
  Navigation,
  NavigationContextType,
} from "utils/types";
import Sidebar from "components/Sidebar";

export const NavigationContext = createContext<NavigationContextType | null>(null);
export const MapDataContext = createContext<MapDataContextType | null>(null);

const defaultPositionsByFloor: Record<number, string> = {
  1: "v35",
  2: "v19",
  3: "v5",
  4: "v10",
  5: "v25",
  6: "v42",
  7: "v60",
};

function Map() {
  const navigate = useNavigate();
  const { floorNumber } = useParams<{ floorNumber: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const floor = Number(floorNumber) || 1;

  const [navigation, setNavigation] = useState<Navigation>({
    start: "",
    end: "",
    floor: floor,
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const navigationValue: NavigationContextType = {
    navigation,
    setNavigation,
    isEditMode,
    setIsEditMode,
  };

  const mapData = useMapData();

  useEffect(() => {
    const positionParam = searchParams.get("position");
    const defaultStart = defaultPositionsByFloor[floor];

    const start = positionParam || defaultStart;

    setNavigation({
      start,
      end: "",
      floor,
    });

    if (floorNumber !== String(floor) || positionParam !== start) {
      navigate(`/${floor}?position=${start}`, { replace: true });
    }
  }, [floor]);

  useEffect(() => {
    if (navigation.start) {
      navigate(`/${navigation.floor}?position=${navigation.start}`, { replace: true });
    }
  }, [navigation.start]);

  return (
    <MapDataContext.Provider value={mapData}>
      <NavigationContext.Provider value={navigationValue}>
        <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
          {isDesktop && <Sidebar />}
          <main
            className={`flex w-full ${isDesktop && "-ml-96"} justify-center flex-grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
          >
            <Toolbar />
            <div className="center w-full h-full">
              <IndoorMapWrapper />
            </div>
          </main>
          {navigation.end && isMobile && <MobileRouteDetails />}
        </div>
      </NavigationContext.Provider>
    </MapDataContext.Provider>
  );
}

export default Map;
