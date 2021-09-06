import * as React from 'react';

import { useThemedContext } from '../../../contexts/ThemeProvider';

type HomeScreenTab = {
  className: string;
  iconName: string;
}


export const Footer: React.FC<{activeTab: number}> = ({activeTab}) => {
  const { fonts } = useThemedContext();
  return (
    <gridLayout row={1} columns="*, *, *, *, *">
            <HomeTabButton active={activeTab === 0} col={0} tab={{
              className: 'Entypo',
              iconName: fonts.Entypo.home
            }} />
            <HomeTabButton active={activeTab === 1} col={1} tab={{
              className: 'Feather',
              iconName: fonts.Feather.search
            }} />
            <TweetButton />
            <HomeTabButton active={activeTab === 3} col={3} tab={{
              className: 'Feather',
              iconName: fonts.Feather.bell
            }} />
            <HomeTabButton active={activeTab === 4} col={4} tab={{
              className: 'Feather',
              iconName: fonts.Feather.mail
            }} />
          </gridLayout>
  )
}

interface HomeTabButtonProps {
  col: number;
  active: boolean;
  tab: HomeScreenTab;
}

const HomeTabButton: React.FC<HomeTabButtonProps> = ({
  col,
  active,
  tab
}) => {
  const { twitterColors } = useThemedContext();
  return (
    <flexboxLayout alignItems="center" justifyContent="center" col={col}>
      <label className={`${tab.className} size24`} text={tab.iconName} color={twitterColors[500]} />
    </flexboxLayout>
  )
}

const TweetButton = () => {
  const { fonts, twitterColors } = useThemedContext();
  return (
    <flexboxLayout alignItems="center" justifyContent="center" col={2}>
      <flexboxLayout alignItems="center" justifyContent="center" background={twitterColors[500]} width={50} height={50} borderRadius={25}>
        <label className="Entypo size24" text={fonts.Entypo.feather} color="white" />
      </flexboxLayout>
    </flexboxLayout>
  )
}
