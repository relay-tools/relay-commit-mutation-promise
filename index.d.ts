declare module 'relay-commit-mutation-promise' {
    import { MutationConfig, MutationParameters, IEnvironment } from 'relay-runtime';

    export default function commitMutation<T extends MutationParameters>(environment: IEnvironment, config: Omit<MutationConfig<T>, 'onError' | 'onCompleted'>) : Promise<T['response']>
}
