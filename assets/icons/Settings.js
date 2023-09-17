import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const SvgComponent = ({active}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
  >
    <G fill="#2F2F2E" opacity={active?1:0.95}>
      <Path
        fillRule="evenodd"
        d="M15.208 5.833a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0Zm-3.125 1.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM4.792 14.167a3.125 3.125 0 1 0 6.25 0 3.125 3.125 0 0 0-6.25 0Zm3.125 1.875a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75Z"
        clipRule="evenodd"
      />
      <Path d="M11.875 14.132c0-.345.28-.625.625-.625h5.833a.625.625 0 1 1 0 1.25H12.5a.625.625 0 0 1-.625-.625ZM7.5 5.174a.625.625 0 1 1 0 1.25H1.667a.625.625 0 0 1 0-1.25H7.5ZM1.042 14.132c0-.345.28-.625.625-.625h1.666a.625.625 0 1 1 0 1.25H1.667a.625.625 0 0 1-.625-.625ZM18.333 5.174a.625.625 0 1 1 0 1.25h-1.666a.625.625 0 1 1 0-1.25h1.666Z" />
    </G>
  </Svg>
)
export default SvgComponent
