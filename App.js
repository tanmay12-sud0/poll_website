import React from "react";
import { View, Text, StatusBar, Dimensions, SafeAreaView } from "react-native";
import RNPoll, { IChoice } from "react-native-poll";
import RNAnimated from "react-native-animated-component";

const { width: ScreenWidth } = Dimensions.get("window");

const choices: Array<IChoice> = [
  { id: 1, choice: "Python", votes: 17 },
  { id: 2, choice: "javascript", votes: 7 },
  { id: 3, choice: "Go", votes: 1 },
  { id: 4, choice: "C++", votes: 5 },
  { id: 5, choice: "ruby", votes: 9 },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View>
          <Text
            style={{
              marginTop: 32,
              fontSize: 20,
              fontFamily: "SuezOne-Regular",
            }}
          >
            What programming language do you use during the coding interview
          </Text>
          <View
            style={{
              width: ScreenWidth * 0.9,
            }}
          >
            <RNPoll
              appearFrom="top"
              totalVotes={30}
              animationDuration={750}
              choices={choices}
              PollContainer={RNAnimated}
              PollItemContainer={RNAnimated}
              choiceTextStyle={{
                fontFamily: "SuezOne-Regular",
              }}
              onChoicePress={(selectedChoice: IChoice) =>
                console.log("SelectedChoice: ", selectedChoice)
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;




















