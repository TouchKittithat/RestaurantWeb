import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BottomNavigation from '@mui/material/BottomNavigation';

import Food2 from '../images/image-food2.svg'
import Food4 from '../images/image-food4.jpeg'
import Food5 from '../images/image-food5.jpeg'

import { IconButton } from '@mui/material';


export default function Menu() {
  return (
    <Box>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Button href="/Menu" variant="outlined" style={{ float: 'left' }} sx={{ marginTop: '80px' }}>
          Back to Menu
        </Button>
        <Button href="/history" variant="outlined" style={{ float: 'right' }} sx={{ marginTop: '80px' }}>
          Order History
        </Button>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              Order List
            </Typography>
          </Container>
        </Box>

        <Grid container spacing={8}>

          <Grid item xs={4}>
            <Card
              sx={{ height: '100%', display: 'grid' }}
            >
              <CardMedia
                component="img"
                image={Food2}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  ผัดคะน้าหมูกรอบ
                </Typography>
                <Typography>
                  60 THB
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="small"><AddIcon /></IconButton>
                <Typography>1</Typography>
                <IconButton size="small"><RemoveIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              sx={{ height: '100%', display: 'grid' }}
            >
              <CardMedia
                component="img"
                image={Food4}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  แกงเขียวหวาน
                </Typography>
              </CardContent>
              <Typography>
                60 THB
              </Typography>
              <CardActions>
                <IconButton size="small"><AddIcon /></IconButton>
                <Typography>2</Typography>
                <IconButton size="small"><RemoveIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              sx={{ height: '100%', display: 'grid' }}
            >
              <CardMedia
                component="img"
                image={Food5}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  ต้มยำกุ้ง
                </Typography>
                <Typography>
                  70 THB
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="small"><AddIcon /></IconButton>
                <Typography>1</Typography>
                <IconButton size="small"><RemoveIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      </Container>

      <BottomNavigation
        sx={{ background: "#063970", width: '100%', bottom: 0, position: 'fixed', }}
      >
        <Typography sx={{ margin: 2, color: "#FFFFFF" }}>
          TOTAL PRICE 250.00 THB
        </Typography>

        <Button href="/orderconfirm" sx={{ margin: 1 }} variant="contained">
          Confirm
        </Button>
      </BottomNavigation>

    </Box>
  );
}