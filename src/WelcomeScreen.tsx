import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import React, { useState } from "react";

const Descriptions = [
    {
        graphic: "",
        value: "Hii I am description 1st"
    },
    {
        graphic: "",
        value: "Hii I am description 2nd"
    },
    {
        graphic: "",
        value: "Hii I am description 3rd"
    }
];


type Props = {
    children: React.ReactNode;
}

export const WelcomeScreen = () : JSX.Element => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <Page>
            <DescriptionContainer index={selectedIndex}/>
            <ActionButtonContainer selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        </Page>
    );
}

const Page = ({children} : Props) : JSX.Element => {
    return (
        <SafeAreaView>
            <View style={styles.page}>{children}</View>
        </SafeAreaView>
    );
}

type DescriptionProps = {
    index: number;
}

const DescriptionContainer = ({index} : DescriptionProps) : JSX.Element => {
    return (
        <View style={styles.descriptionContainer}><Text>{Descriptions[index].value}</Text></View>
    );
}

type ActionButtonContainerProps = {
    selectedIndex: number;
    setSelectedIndex: (num: number) => void;
}

const ActionButtonContainer = ({selectedIndex, setSelectedIndex} : ActionButtonContainerProps) : JSX.Element => {
    return (
        <View style={styles.actionButtonContainer}>
            {selectedIndex !== 0 && <Button style={{alignSelf: "flex-start"}} onClick={() => {}}>Back</Button>}
            <Button style={{alignSelf: "flex-end"}}  onClick={() => {}}>{ selectedIndex !== Descriptions.length - 1 ? "Next" : "Continue"}</Button>
        </View>
    );
}

type ButtonProps = {
    children: string;
    style: object;
    onClick: () => void;
    isActive?: boolean
}

const Button = ({children, style, onClick, isActive = true} : ButtonProps) : JSX.Element => {
    return (
        <Pressable style={ Object.assign({}, style, isActive ? activeActionButtonStyle.actionButton : inactiveActionButtonStyle.actionButton)} onPress={onClick}>
            <Text style={isActive ? activeActionButtonStyle.actionButtonLabel : inactiveActionButtonStyle.actionButtonLabel}>{children}</Text>
        </Pressable>
    )
}

const activeActionButtonStyle = StyleSheet.create({
    actionButton: {
        borderRadius: 40,
        backgroundColor: "#000000",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    actionButtonLabel: {
        color: "#FFFFFF",
        fontSize: 16
    }
})

const inactiveActionButtonStyle = StyleSheet.create({
    actionButton: {
        borderRadius: 40,
        backgroundColor: "#EFEFEF",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    actionButtonLabel: {
        color: "#000000",
        fontSize: 16
    }
})

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    descriptionContainer: {
        flex: 1
    },
    actionButtonContainer: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 20,
        paddingStart: 15,
        paddingEnd: 15
    }
})