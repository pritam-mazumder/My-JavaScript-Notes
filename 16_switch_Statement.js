let trafficLight = 'green';

switch (trafficLight) {
    case "green":
        console.log('go');
        break;
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('slow');
        break;
    default:
        console.log('broken');
        break;
}