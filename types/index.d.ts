declare type Await<TData> = TData extends Promise<infer TValue> ? Await<TValue> : TData
