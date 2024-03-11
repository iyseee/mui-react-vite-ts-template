import { Container, Grid, Paper } from "@mui/material";
import Chart from "../Chart";
import Deposits from "../Deposits";
import Orders from "../Orders";


export function Test(){

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={10} md={8} lg={19}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
                <h1>test</h1>
            </Paper>
          </Grid>


        </Grid>
      </Container>
    )
}