import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/2098792891/photo/woman-drying-sweat-in-a-warm-summer-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=RK_I_BxzDeb_XjMd1QT9Z8lnhAApM-hKm1SpdLAxcxU=";
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    


    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? 
            RAIN_URL : (info.temp >25)? 
            HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity >80 ? 
            <ThunderstormIcon/> : (info.temp >25)? 
            <SunnyIcon/> : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}&deg;C</div>
          <div>Max Temp = {info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
};