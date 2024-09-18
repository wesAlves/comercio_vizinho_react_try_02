import {Box, Typography} from "@mui/material";

export function HomeCard(props: {
    card: {
        borderColor: string;
        bgColor: string;
        name: string;
        widthSize: number;
        bgImage: string;
        heightSize: number
    },
    startingCol: number,
    spanCol: number,
    startingRow: number,
    spanRow: number
}) {
    return <Box sx={{
        border: `4px solid ${props.card.borderColor}`,
        backgroundColor: props.card.bgColor,
        backgroundImage: props.card.bgImage ? `url(/images/${props.card.bgImage})` : "url(/images/bicycle.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        width: "100%",
        height: "auto",
        borderRadius: "32px",
        padding: "16px",
        boxSizing: "border-box",
        gridColumn: `${props.startingCol} / span ${props.spanCol}`,
        gridRow: `${props.startingRow} / span ${props.spanRow}`,
        position: "relative",
        overflow: "hidden",
    }}

    >
        <Box sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "#00000044"
        }}></Box>

        <Typography variant={"h3"} sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "white",
            boxShadow: "var(--Paper-shadow)",
            position: "relative",
            zIndex: "1"
        }}>
            {props.card.name}
        </Typography>

    </Box>;
}