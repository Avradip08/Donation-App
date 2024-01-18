import { Avatar, Box,  Typography,Paper } from "@mui/material";
import { pink, red } from "@mui/material/colors";

export default function Appbar(){
    return (
        <Box sx={{
            width: "100%",
            zIndex: 1,
            display: "flex",
            alignItems:'center', 
            justifyContent:'center', 
        }}>
            <Avatar src="/assets/medito.jpg" alt="medito"/>
            <Typography variant="h4">
                -Donations
            </Typography>
        </Box>
        
    )
}