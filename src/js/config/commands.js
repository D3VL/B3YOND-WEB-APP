import MODELS from './models';
import NETCAP from './net_capabilities';

export default {
    "fcc-unlock-v1": {
        models: [
            { type: MODELS.A2, firmware: ['1.1.1.*', '*'] }
        ],
        requires: [NETCAP.DUML],
        title: 'FCC Unlock',
        description: 'Unlock FCC power',
        isSponsored: false,
        sponsorText: '',
        isExperimental: false,
        background: '',
        jsxFilename: 'FccGen1.jsx',
        path: 'fcc-unlock-v1'
    },
    "remote-id": {
        models: [
            { type: MODELS.A2, firmware: ['1.1.1.*', '*'] }
        ],
        requires: [NETCAP.DUML],
        title: 'Disable Remote ID',
        description: 'Stay Hidden in the sky',
        isSponsored: true,
        sponsorText: 'Credit to MavProxyUser',
        isExperimental: true,
        background: '',
        jsxFilename: 'FccGen1.jsx',
        path: 'fcc-unlock-v1'
    },
    "parameter-modifications": {
        models: [{ type: MODELS.ALL, firmware: ['*'] }],
        requires: [NETCAP.DUML],
        title: 'Parameter Modifications',
        description: 'Modify Flight Parameters',
        isSponsored: false,
        sponsorText: '',
        isExperimental: false,
        background: '',
        jsxFilename: 'ParameterModification.jsx',
        path: 'parameter-modifications'
    },
    "request": {
        models: [{ type: MODELS.ALL, firmware: ['*'] }],
        requires: [],
        title: 'Request a new mod.',
        description: 'Submit a request for a new mod.',
        isSponsored: false,
        sponsorText: '',
        isExperimental: false,
        background: '',
        jsxFilename: 'ParameterModification.jsx',
        path: 'parameter-modifications'
    }
}