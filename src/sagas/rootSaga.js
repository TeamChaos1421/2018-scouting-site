// Sagas
import fetchSettings from './fetchSettings';
import updateSettings from './updateSettings';
import matchData from './matchData';

export default function* rootSaga() {
	yield [
		fetchSettings(),
		updateSettings(),
		matchData(),
	]
}
