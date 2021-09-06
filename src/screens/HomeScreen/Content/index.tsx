import * as React from 'react';
import { ListView } from 'react-nativescript';
import { useThemedContext } from '../../../contexts/ThemeProvider';

export const Content: React.FC<{}> = () => {
  const { twitterColors, activeTheme, fonts } = useThemedContext();
  return (
    <ListView
      row={0}
      items={[1, 2, 3, 4, 5, 6]}
      separatorColor={activeTheme[500]}
      cellFactory={(item) => {
        return (
          <gridLayout columns="40, *" rows="*, 8">
            <gridLayout rows="40, 240" col={0}>
              <flexboxLayout row={0} style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                background: twitterColors[500]
              }}>

              </flexboxLayout>
              <flexboxLayout justifyContent="center" row={1}>
                <stackLayout style={{
                  backgroundColor: twitterColors[300],
                  height: '100%',
                  width: 4,
                }} />
              </flexboxLayout>
            </gridLayout>
            <gridLayout padding="0 8" col={1} rows="40, 4, 200, 40">
              <gridLayout rows="4, 15, 2, 15, 4" row={0}>
                <flexboxLayout row={1}>
                  <PlaceHolder width={"70%"} color={twitterColors[400]} />
                </flexboxLayout>
                <flexboxLayout row={2} />
                <flexboxLayout row={3}>
                  <PlaceHolder width={"30%"} color={twitterColors[300]} />
                </flexboxLayout>
              </gridLayout>
              <stackLayout style={{
                background: twitterColors[300],
                borderRadius: 20,
              }} row={2} />
              <gridLayout row={3} columns="*, *, *">
                <CardButton col={0} iconClass="EvilIcons" iconName={fonts.EvilIcons.comment} />
                <CardButton col={1} iconClass="EvilIcons" iconName={fonts.EvilIcons.refresh} />
                <CardButton col={2} iconClass="EvilIcons" iconName={fonts.EvilIcons['share-google']} />
              </gridLayout>
            </gridLayout>
          </gridLayout>
        )
      }}
    />
  )
}

interface PlaceHolderProps {
  color: string;
  width: number | string;
}
const PlaceHolder: React.FC<PlaceHolderProps> = ({
  color,
  width
}) => {
  return (
    <stackLayout width={width} background={color} borderRadius={10} />
  )
}

interface CardButtonProps {
  col: number;
  iconClass: string;
  iconName: string;
}
const CardButton: React.FC<CardButtonProps> = ({
  col,
  iconClass,
  iconName,
}) => {
  const color = "#57b0f4";
  return (
    <flexboxLayout alignItems="center" col={col} color={color}>
      <label className={`${iconClass} size24`} text={iconName} />
      <label text="1.4K" className="size14" />
    </flexboxLayout>
  )
}
