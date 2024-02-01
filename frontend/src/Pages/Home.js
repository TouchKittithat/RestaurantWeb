import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BannerImg from '../images/banner-food.svg';
import Food1 from '../images/image-food1.svg'
import Food2 from '../images/image-food2.svg'
import Food3 from '../images/image-food3.svg'

function Home() {
  return (

    <Box sx={{ py: 6 }}>
      <div style={{ justifyContent: 'center', marginTop: '30px' }}>
        <img src={BannerImg} alt="Banner" style={{ maxWidth: '100%' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <img src={Food1} alt="Food1" style={{ flex: 1, maxWidth: '25%', marginLeft: '35px' }} />
        <img src={Food2} alt="Food2" style={{ flex: 1, maxWidth: '26%', marginLeft: '110px', marginRight: '110px' }} />
        <img src={Food3} alt="Food3" style={{ flex: 1, maxWidth: '25%', marginRight: '35px' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Button href="/Menu" variant="contained" style={{ marginRight: '390px' }}> CLICK NOW </Button>
        <Button href="/Menu" variant="contained" style={{ marginRight: '390px' }}> CLICK NOW </Button>
        <Button href="/Menu" variant="contained"> CLICK NOW </Button>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '40px' }}>
        <a href='/location'>MORE</a>
      </div>
    </Box>

  );
}

export default Home