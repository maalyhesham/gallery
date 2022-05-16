import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PhotoCameraSharpIcon from '@mui/icons-material/PhotoCameraSharp';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

export default function SearchAppBar() {
    const handleChange = e => {
        setTimeout(() => props.setSearchValue(e.target.value), 500)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <PhotoCameraSharpIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper  >
                            <SearchIcon onClick={props.handelSearch} sx={{ cursor: "pointer", zIndex=10 }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleChange}
                            value={props.searchValue} onKeyPress={e => {
                                if (e.key === "Enter")
                                    props.handelSearch()
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
