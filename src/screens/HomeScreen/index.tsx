import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { useThemedContext } from '../../contexts/ThemeProvider';
import { getStatusBarHeight } from "../../utils";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from './Content/index';

type HomeScreenProps = {
  route: RouteProp<MainStackParamList, "Home">,
  navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const { twitterColors, activeTheme, fonts } = useThemedContext();
  return (
    <gridLayout rows={`${getStatusBarHeight()}, 70, *`} style={{
      background: twitterColors[500],
    }}>
      <Header />
      <gridLayout row={2} columns="auto, *" borderTopLeftRadius={30} borderTopRightRadius={30} style={{
        background: activeTheme[500]
      }}>
        <stackLayout col={0} style={{
          width: 6,
          background: twitterColors[500],
          marginBottom: 40,
          marginTop: 40,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        }}/>
        <gridLayout paddingTop={35} paddingLeft={8} paddingRight={8} col={1} rows="*, 60, 8">
          <Content />
          <Footer activeTab={activeTab} />
        </gridLayout>
      </gridLayout>
    </gridLayout>
  );
}
