import { Avatar, Box,  Typography } from "@mui/material";
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
            <Avatar  alt="Medito" src="src/assets/medito.jpg" />
            <Typography variant="h4" >
                -Donations
            </Typography>
        </Box>
        
    )
}