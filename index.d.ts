declare module 'relay-commit-mutation-promise' {
    import { MutationConfig, OperationType, Environment } from 'relay-runtime';

    export default function commitMutation<T extends OperationType>(environment: Environment, config?: Omit<Omit<MutationConfig<T>, 'onError'>,  'onCompleted'>) : Promise<T['response']>
}
