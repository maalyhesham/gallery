import React from "react";
import { Skeleton, Stack } from "@mui/material"
import Box from "@mui/material/Box"

function LoadingSkeleTon(props) {
    return (<Box display={'flex'} flex={4} justifuContent={"center"} alignItems={"start"} flexWrap={"warp"} flexDirection={"row"} >
        <Stack spacing={1} width={"20%"} margin={0}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack> <Stack spacing={1} width={"20%"} margin={0}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack> <Stack spacing={1} width={"20%"} margin={0}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack> <Stack spacing={1} width={"20%"} margin={0}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
    </Box>
    );
}

export default LoadingSkeleTon;