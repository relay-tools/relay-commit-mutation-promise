declare module 'relay-commit-mutation-promise' {
    import { MutationConfig, MutationParameters, Environment } from 'relay-runtime';

    export default function commitMutation<T extends MutationParameters>(environment: Environment, config: Omit<MutationConfig<T>, 'onError' | 'onCompleted'>) : Promise<T['response']>
}
