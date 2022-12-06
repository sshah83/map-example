

import {
  createMapScope, Map,
  MapInstanceScope,
  ZoomControlPosition
} from "@sshah83/mapcomponents";

  /**
   * This is the main rendered MapExample map component that's used in the MapExample application.
   * This map component has only a single scope that's loaded in {@link MapExample} and used to initialize this component.
   */
  
  export const MapExample = () => {
  
    const scope = createMapScope();
    return ( <>
    <MapInstanceScope scope={scope}>
        <Map
          scope={scope}
          height="400px"
          width="100%"
        >
        <ZoomControlPosition position={"bottomright"} />
      </Map>
        </MapInstanceScope>

    </>
      
    );
  };