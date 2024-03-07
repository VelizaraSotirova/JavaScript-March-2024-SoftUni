function solve(speed, area) {
    let difference;
    let speedlimit;
    switch (area) {
        case 'motorway':
            speedlimit = 130;
            break;
        case 'interstate':
            speedlimit = 90;
            break;
        case 'city':
            speedlimit = 50;
            break;
        case 'residential':
            speedlimit = 20;
            break;
    }

    if (speed <= speedlimit) {
        console.log(`Driving ${speed} km/h in a ${speedlimit} zone`);
    }
    else {
        difference = speed - speedlimit;
        let status;
        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedlimit} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');