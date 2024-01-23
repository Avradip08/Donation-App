import { Avatar, Box,  Typography,Paper } from "@mui/material";
import { pink, red } from "@mui/material/colors";

export default function Appbar(){
    return (
        <Box sx={{
            
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