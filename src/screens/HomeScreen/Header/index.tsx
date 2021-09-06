import * as React from "react";
import { useThemedContext } from "../../../contexts/ThemeProvider";

export const Header: React.FC<{}> = () => {
  return (
    <gridLayout padding="0 16" columns="50, *, 50" row={1}>
      <TwitterMenuButton />
      <absoluteLayout col={1}>
        <flexboxLayout left={0} top={0} width="100%" height="100%" alignItems="center" justifyContent="center">
          <TwitterOpaqueLogo />
        </flexboxLayout>
        <flexboxLayout background="transparent" left={0} top={0} width="100%" height="100%" alignItems="center" justifyContent="center">
          <TwitterLogo />
        </flexboxLayout>
      </absoluteLayout>
      <TwitterDarkModeToggleButton />
    </gridLayout>
  )
}

const TwitterOpaqueLogo = () => {
  const { fonts, twitterColors } = useThemedContext();
  return (
    <flexboxLayout alignItems="center" justifyContent="center">
      <flexboxLayout alignItems="center" justifyContent="center">
        <label className="Entypo size150" text={fonts.Entypo.twitter} color={twitterColors[200]} />
      </flexboxLayout>
    </flexboxLayout>
  )
}

const TwitterLogo = () => {
  const { fonts } = useThemedContext();
  return (
    <flexboxLayout alignItems="center" justifyContent="center">
      <flexboxLayout alignItems="center" justifyContent="center" width={40} height={40} borderRadius={20}>
        <label className="Entypo size40" text={fonts.Entypo.twitter} color={"#fff"} />
      </flexboxLayout>
    </flexboxLayout>
  )
}

const TwitterMenuButton = () => {
  const { fonts, activeTheme, isDarkMode, twitterColors } = useThemedContext();
  return (
    <flexboxLayout alignItems="center" justifyContent="center" col={0}>
      <flexboxLayout alignItems="center" justifyContent="center" background="#fff" width={40} height={40} borderRadius={20}>
        <label className="Entypo size24" text={fonts.Entypo.menu} color={isDarkMode ? activeTheme[500] : twitterColors[500]} />
      </flexboxLayout>
    </flexboxLayout>
  )
}

const TwitterDarkModeToggleButton = () => {
  const { fonts, activeTheme, isDarkMode, twitterColors, toggleDarkMode } = useThemedContext();
  return (
    <flexboxLayout alignItems="center" justifyContent="center" col={2}>
      <flexboxLayout onTap={() => toggleDarkMode()} alignItems="center" justifyContent="center" background="#fff" width={40} height={40} borderRadius={20}>
        <label className={`${isDarkMode ? 'FontAwesome' : 'Entypo'} size24`} text={isDarkMode ? fonts.FontAwesome["sun-o"] : fonts.Entypo.moon} color={isDarkMode ? activeTheme[500] : twitterColors[500]} />
      </flexboxLayout>
    </flexboxLayout>
  )
}
