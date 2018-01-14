import electrician from '../../../assets/img/electrician.svg';
import plumber from '../../../assets/img/plumber.svg';
import gardener from '../../../assets/img/gardener.svg';
import housekeeper from '../../../assets/img/housekeeper.svg';
import cook from '../../../assets/img/cook.svg';

export default {
    'electrician': {
        logo: electrician,
        tasks: ['Replace a light', 'Check a socket', 'Check power']
    },
    'plumber': {
        logo: plumber,
        tasks: ['Unblock a toilet', 'Unblock a sink', 'Fix a water leak', 'Install a leak', 'Install a shower', 'Install a toilet']
    },
    'gardener': {
        logo: gardener,
        tasks: ['Clean a garden', 'Cut trees', 'Plant flowers', 'Water trees']
    },
    'housekeeper': {
        logo: housekeeper,
        tasks: ['Iron things', 'Dry things', 'Clean a room', 'Move furniture']
    },
    'cook': {
        logo: cook,
        tasks: ['Make fries', 'Boil spaghetti', 'Fry eggs', 'Make a grill']
    }
};