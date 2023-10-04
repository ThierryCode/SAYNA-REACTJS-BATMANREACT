import { Box, Breadcrumbs, Link, Typography } from "@mui/material"

export const Breadcrumbs = () => {
  return (
    <Box >
        <Breadcrumbs aria-label = 'breadcrumb'>
            <Link underline='hover' href="#">Eshop</Link>
            <Typography>Batman</Typography>
        </Breadcrumbs>
    </Box>
  )
}
