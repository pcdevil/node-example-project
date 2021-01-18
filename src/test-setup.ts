import chai from 'chai';
import 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

afterEach(() => {
	sinon.restore();
});
