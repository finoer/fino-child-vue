import { invoke, registerApps, $data } from '@finoer/finoer-invoke'
import { routerArray, } from './router'
// @ts-ignore
import mouduleInfo from '../vf2e.config.json'

const runtime = invoke.isInFinoRuntime()
// 如果是独立运行， 那么作为基座注册自己
if(!runtime) {
  registerApps([ {
    ...mouduleInfo,
    activeWhen: (location) => {
        const route = window.location.href.split(window.location.origin)[1].split('/')[1]
        return route === mouduleInfo.name
    }
  } ])
}

const finoApp = {
    name: mouduleInfo.name,
    init: (instance: any) => {
        // @ts-ignore
        instance.injectionRouter(routerArray)
    }
};

invoke.$event.notify('childAppLoaded', finoApp);
