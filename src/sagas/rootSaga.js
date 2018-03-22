// Sagas
import fetchSettings from './fetchSettings';
import updateSettings from './updateSettings';

export default function* rootSaga() {
	yield [
		fetchSettings(),
		updateSettings(),
	]
}
