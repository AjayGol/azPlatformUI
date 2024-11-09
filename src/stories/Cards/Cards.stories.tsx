import React, {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import Cards from '../../components/Cards';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {
  ActionButtonProps,
  CardChildrenProps,
  CardFooterProps,
  CardHeaderProps,
} from '../../components/Cards/Cards.types';
import {styles} from '../../components/Cards/Cards.styles';
import Icon from '../../common/Icon';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../constants/colors';
import {isIpad} from '../../constants/constant';
import CardList from '../../components/Cards';

const meta: Meta<typeof Cards> = {
  title: 'components/Cards',
  component: Cards,
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
      description: 'JSX elements to render inside the card',
    },
    header: {
      control: {
        type: 'object',
      },
      description: 'JSX element for the card header',
    },
    footer: {
      control: {
        type: 'object',
      },
      description: 'JSX element for the card footer',
    },
    className: {
      control: {
        type: 'object',
      },
      description: 'class name for style',
    },
    borderRadius: {
      control: 'boolean',
      description: 'Apply border radius to all corners',
    },
    index: {table: {disable: true}},
    data: {table: {disable: true}},
  },
  decorators: [withTests({results})],
  tags: ['autodocs'],
};

export default meta;

const sampleData = [
  {
    text: 'Breast Cancer Advanced Stage',
    textColor: colors.primaryColor,
    date: '01/30/2024',
    imageSource: {uri: './Images/dna.png'},
    fileImage: {uri: './Images/office.png'},
    locationIconLib: 'FontAwesome6',
    locationIconName: 'location-dot',
    locationIconSize: 23,
    checkIconLib: 'FontAwesome5',
    checkIconName: 'check',
    checkIconColor: colors.white,
    checkIconBgColor: colors.primaryColor,
    description:
      'Strategy: Early detection, diagnosis and treatment of at risk patients with CKD. Insight: In having discussion about the new KHA hand-book and specifically the target of a 30% reduction in uACR, doctor felt that this should not be seen as a hard target.',
    status: 'NEW',
    onCheckboxPress: () => alert('Checkbox Pressed'),
    checked: false,
    heartClicked: false,
    onPressItem: (button: ActionButtonProps) => {
      alert(`${button.id} + ${button.iconAction} Press1`);
    },
    disableButtons: false,
    checkedIconSize: 12,
    actionIconSize: 16,
  },
  {
    text: 'Breast Cancer Advanced Stage',
    textColor: colors.primaryColor,
    date: '01/30/2024',
    imageSource: {uri: './Images/dna.png'},
    fileImage: {uri: './Images/office.png'},
    locationIconLib: 'FontAwesome6',
    locationIconName: 'location-dot',
    locationIconSize: 23,
    checkIconLib: 'FontAwesome5',
    checkIconName: 'check',
    checkIconColor: colors.white,
    checkIconBgColor: colors.primaryColor,
    description:
      'Strategy: Early detection, diagnosis and treatment of at risk patients with CKD. Insight: In having discussion about the new KHA hand-book and specifically the target of a 30% reduction in uACR, doctor felt that this should not be seen as a hard target.',
    status: 'NEW',
    onCheckboxPress: () => alert('Checkbox Pressed'),
    checked: false,
    heartClicked: false,
    onPressItem: (button: ActionButtonProps) => {
      alert(`${button.id} + ${button.iconAction} Press2`);
    },
    disableButtons: false,
    checkedIconSize: 12,
    actionIconSize: 16,
  },
  {
    text: 'Breast Cancer Advanced Stage',
    textColor: colors.primaryColor,
    date: '01/30/2024',
    imageSource: {uri: './Images/dna.png'},
    fileImage: {uri: './Images/office.png'},
    locationIconLib: 'FontAwesome6',
    locationIconName: 'location-dot',
    locationIconSize: 23,
    checkIconLib: 'FontAwesome5',
    checkIconName: 'check',
    checkIconColor: colors.white,
    checkIconBgColor: colors.primaryColor,
    description:
      'Strategy: Early detection, diagnosis and treatment of at risk patients with CKD. Insight: In having discussion about the new KHA hand-book and specifically the target of a 30% reduction in uACR, doctor felt that this should not be seen as a hard target.',
    status: 'NEW',
    onCheckboxPress: () => alert('Checkbox Pressed'),
    checked: false,
    heartClicked: false,
    onPressItem: (button: ActionButtonProps) => {
      alert(`${button.id} + ${button.iconAction} Press3`);
    },
    disableButtons: false,
    checkedIconSize: 12,
    actionIconSize: 16,
  },
  {
    text: 'Breast Cancer Advanced Stage',
    textColor: colors.primaryColor,
    date: '01/30/2024',
    imageSource: {uri: './Images/dna.png'},
    fileImage: {uri: './Images/office.png'},
    locationIconLib: 'FontAwesome6',
    locationIconName: 'location-dot',
    locationIconSize: 23,
    checkIconLib: 'FontAwesome5',
    checkIconName: 'check',
    checkIconColor: colors.white,
    checkIconBgColor: colors.primaryColor,
    description:
      'Strategy: Early detection, diagnosis and treatment of at risk patients with CKD. Insight: In having discussion about the new KHA hand-book and specifically the target of a 30% reduction in uACR, doctor felt that this should not be seen as a hard target.',
    status: 'NEW',
    onCheckboxPress: () => alert('Checkbox Pressed'),
    checked: false,
    heartClicked: false,
    onPressItem: (button: ActionButtonProps) => {
      alert(`${button.id} + ${button.iconAction} Press4`);
    },
    disableButtons: false,
    checkedIconSize: 12,
    actionIconSize: 16,
  },

  {
    text: 'Breast Cancer Advanced Stage',
    textColor: colors.primaryColor,
    date: '01/30/2024',
    imageSource: {uri: './Images/dna.png'},
    fileImage: {uri: './Images/office.png'},
    locationIconLib: 'FontAwesome6',
    locationIconName: 'location-dot',
    locationIconSize: 23,
    checkIconLib: 'FontAwesome5',
    checkIconName: 'check',
    checkIconColor: colors.white,
    checkIconBgColor: colors.primaryColor,
    description:
      'Strategy: Early detection, diagnosis and treatment of at risk patients with CKD. Insight: In having discussion about the new KHA hand-book and specifically the target of a 30% reduction in uACR, doctor felt that this should not be seen as a hard target.',
    status: 'NEW',
    onCheckboxPress: () => alert('Checkbox Pressed'),
    checked: false,
    heartClicked: false,
    onHeartClick: () => alert('Heart Clicked 1'),
    onDownloadPress: () => alert('Download Pressed 1'),
    onSharePress: () => alert('Share Pressed 1'),
    disableButtons: false,
    checkedIconSize: 12,
    actionIconSize: 16,
  },
];

const Header: React.FC<CardHeaderProps> = props => {
  const [checked, setChecked] = useState(props?.checked || false);
  const handleCheckboxPress = () => {
    setChecked(!checked);
    if (props?.onCheckboxPress) {
      props?.onCheckboxPress();
    }
  };

  return (
    <View style={styles.Cards}>
      <View style={styles.titleContainer}>
        <View style={styles.checkBoxContainer}>
          <TouchableOpacity
            onPress={handleCheckboxPress}
            style={[
              styles.checkbox,
              checked
                ? {
                    ...styles.checkedCheckbox,
                    backgroundColor:
                      props?.checkIconBgColor || colors.secondaryColor,
                    borderColor:
                      props?.checkIconBgColor || colors.secondaryColor,
                  }
                : styles.uncheckedCheckbox,
            ]}>
            {checked && (
              <Icon
                lib={props?.checkIconLib || 'FontAwesome5'}
                name={props?.checkIconName ?? 'check'}
                size={props?.checkedIconSize || 12}
                style={{
                  ...styles.paddingIcon,
                  backgroundColor:
                    props?.checkIconBgColor || colors.primaryColor,
                }}
                color={props?.checkIconColor || colors.white}
              />
            )}
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            style={{
              ...styles.CardsText,
              color: props?.textColor || colors.primaryColor,
            }}>
            {props?.text}
          </Text>
        </View>
        {props?.status && (
          <View style={styles.statusContainer}>
            <View style={styles.innerStatus}>
              <Text numberOfLines={1} style={styles.statusText}>
                {props?.status}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const Footer: React.FC<CardFooterProps> = props => {
  const [heartClicked, setHeartClicked] = useState(
    props?.heartClicked || false,
  );

  const handlePressItem = (button: ActionButtonProps) => {
    if (props.onPressItem) {
      props.onPressItem(button);
    }
    if (button.iconAction === 'like') {
      setHeartClicked(!heartClicked);
    }
  };

  const actionButtons: ActionButtonProps[] = [
    {
      id: 1,
      iconAction: 'like',
      iconLibrary: 'FontAwesome6',
      iconName: heartClicked ? 'heart-circle-minus' : 'heart-circle-plus',
      color: heartClicked ? colors.white : colors.primaryColor,
      backgroundColor: heartClicked ? colors.primaryColor : colors.white,
      disabled: props?.disableButtons || false,
    },
    {
      id: 2,
      iconAction: 'download',
      iconLibrary: 'Foundation',
      iconName: 'download',
      color: colors.primaryColor,
      backgroundColor: 'transparent',
      disabled: props?.disableButtons || false,
    },
    {
      id: 3,
      iconAction: 'share',
      iconLibrary: 'Ionicons',
      iconName: 'share-social',
      color: colors.primaryColor,
      backgroundColor: 'transparent',
      disabled: props?.disableButtons || false,
    },
  ];

  return (
    <View
      style={[
        styles.bottomCards,
        {
          borderBottomLeftRadius: props?.borderRadius ? 8 : 0,
          borderBottomRightRadius: props?.borderRadius ? 8 : 0,
        },
      ]}>
      <View style={styles.row}>
        <Image
          style={styles.profileImage}
          source={{uri: props?.fileImage?.uri}}
        />
        <ScrollView
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.actionButtonsContainer}>
          {actionButtons.map((button, index) => (
            <TouchableOpacity
              testID={`icon-${button.iconAction}`}
              key={index}
              style={[
                styles.iconButton,
                {
                  backgroundColor: button.backgroundColor,
                  borderWidth:
                    props?.heartClicked && button.iconAction === 'like'
                      ? 0
                      : 0.5,
                },
              ]}
              onPress={() => handlePressItem(button)}
              disabled={button.disabled}>
              <Icon
                lib={button.iconLibrary || 'FontAwesome'}
                style={styles.paddingIcon}
                name={button.iconName}
                size={props?.actionIconSize || 16}
                color={button.color}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.dateContainer}>
        <Text numberOfLines={1} style={styles.dateText}>
          {props?.date ? `Date: ${props?.date}` : ''}
        </Text>
      </View>
    </View>
  );
};

const Children: React.FC<CardChildrenProps> = props => {
  const altImage = {uri: './Images/dummyImage.png'};
  return (
    <View style={styles.cardDescriptionContent}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={props?.imageSource ? props?.imageSource : altImage}
        />
        {props?.IconName && (
          <View style={styles.playIcon}>
            <Icon
              lib={props?.IconLib || 'FontAwesome6'}
              style={styles.paddingIcon}
              name={props?.IconName}
              size={isIpad ? 18 : props?.IconSize}
              color={props?.IconColor || colors.white}
            />
          </View>
        )}
      </View>
      {props?.locationIconName && (
        <View style={styles.location}>
          <Icon
            lib={props?.locationIconLib || 'FontAwesome6'}
            style={styles.paddingIcon}
            name={props?.locationIconName}
            size={isIpad ? 18 : props?.locationIconSize}
            color={colors.white}
          />
        </View>
      )}
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={isIpad ? 4 : 5} style={styles.cardDescriptionText}>
          {props?.description}
        </Text>
      </View>
    </View>
  );
};

const generateCardProps = (
  data: CardHeaderProps & CardFooterProps & CardChildrenProps,
  borderRadius?: boolean,
  className?: ViewStyle,
) => ({
  header: <Header {...data} />,
  footer: <Footer {...data} borderRadius={borderRadius} />,
  children: <Children {...data} />,
  className,
});

type Story = StoryObj<typeof Cards>;

const CardLayoutComponent: React.FC<{
  args: {
    borderRadius: boolean;
    className: ViewStyle;
    data: Array<CardHeaderProps & CardFooterProps & CardChildrenProps>;
  };
}> = ({args}) => {
  return (
    <CardList
      {...args}
      data={args.data.map(dataItem =>
        generateCardProps(dataItem.header.props, args.borderRadius, args.style),
      )}
    />
  );
};

export const Card_Layout: Story = {
  render: args => <CardLayoutComponent args={args} />,
  args: {
    data: sampleData.map(dataItem => generateCardProps(dataItem, false)),
    header: sampleData.map(dataItem => generateCardProps(dataItem).header),
    footer: sampleData.map(dataItem => generateCardProps(dataItem).footer),
    children: sampleData.map(dataItem => generateCardProps(dataItem).children),
    borderRadius: false,
    className: {backgroundColor: colors.white},
  },
};

export const Card_Border_Radius_All_Corner: Story = {
  render: args => <CardLayoutComponent args={args} />,
  args: {
    data: sampleData.map(dataItem => generateCardProps(dataItem, true)),
    header: sampleData.map(dataItem => generateCardProps(dataItem).header),
    footer: sampleData.map(dataItem => generateCardProps(dataItem).footer),
    children: sampleData.map(dataItem => generateCardProps(dataItem).children),
    borderRadius: true,
    className: {backgroundColor: colors.white},
    scrollEnabled: true,
  },
};
