import {Box, Button, IconButton, Typography} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import {HomeCard} from "../../components/homeCard.tsx";
import {PageTitleBar} from "../../components/pageTitleBar.tsx";

const homeCards = [
    {
        "name": "Foods and drinks",
        borderColor: "#749A44",
        bgColor: "#D5FFA0",
        bgImage: "fresh.png",
        widthSize: 4,
        heightSize: 2
    },
    {
        "name": "Beauty shop",
        borderColor: "#670044",
        bgColor: "#FBBEEA",
        bgImage: "bauty_shop.png",
        widthSize: 4,
        heightSize: 2
    },
    {
        "name": "Gardner",
        borderColor: "#053DCE",
        bgColor: "#A0B5FF",
        bgImage: "gardner.png",
        widthSize: 2,
        heightSize: 2
    },
    {
        "name": "Barber shop",
        borderColor: "#392600",
        bgColor: "#FFCEA0",
        bgImage: "barber_shop.png",
        widthSize: 2,
        heightSize: 2
    },
    {
        "name": "Second hand",
        borderColor: "#8D581A",
        bgColor: "#FFD9A0",
        bgImage: "bicycle.png",
        widthSize: 2,
        heightSize: 4
    },
    {
        "name": "Building",
        borderColor: "#ffbb00",
        bgColor: "#FFD9A0",
        bgImage: "construction.png",
        widthSize: 2,
        heightSize: 4
    },
    {
        "name": "Car maintenance",
        borderColor: "#737373",
        bgColor: "#bcbcbc",
        bgImage: "car_maintenance.png",
        widthSize: 4,
        heightSize: 2
    }
]



export function Index() {
    return <Box sx={{width: "100%", flex: 1}}>

        <PageTitleBar title={"Home"}/>

        <Box sx={{
            padding: "32px 32px 32px 16px",
            display: "grid",
            gridTemplateRows: "repeat(6, 96px)",
            gridTemplateColumns: "repeat(8, 96px) ",
            gridGap: "16px",
            maxWidth: "960px",
            mx: "auto"
        }}>

            {homeCards.map((card, index) => {

                let startingCol = 1;
                const spanCol = card.widthSize;
                let startingRow = index * 2 + 1;
                const spanRow = card.heightSize;

                if (index > 3) {
                    startingCol = 5;
                    startingRow = (index - 4) * 2 + 1;
                }
                if (index === 3 || index === 5) {
                    startingCol += 2;
                    startingRow -= 2;
                }


                return (
                    <HomeCard key={card.name} card={card} startingCol={startingCol} spanCol={spanCol}
                              startingRow={startingRow} spanRow={spanRow}/>

                )
            })}
        </Box>

    </Box>;
}