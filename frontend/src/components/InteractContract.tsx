import { useEffect, useState } from 'react';
import { useWalletClient, useNetwork, useAccount } from "wagmi";

import Spinner from './Spinner';
import { getWagerBoxContract, createMatch } from "../web3";

const InteractContract = () => {
    const { connector } = useAccount();
    const { data: walletClient } = useWalletClient();
    const { chain } = useNetwork();
    const [contract, setContract] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const callContractFn = async () => {
        try {
            setLoading(true);
            const resp = await createMatch(
                contract,
                "",
                +10
            );
            console.log(resp);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        if (walletClient && chain) {
            const network = chain?.network
            getWagerBoxContract({ chain: network, connector })
                .then((contract: any) => {
                    setContract(contract);
                });
        }
    }, [walletClient, chain]);

    return (
        <div className='flex flex-col gap-4'>
            Interact with Contract
            <Spinner loading={loading} />
            <button className='btn btn-success w-96' onClick={callContractFn}>Call Contract</button>
        </div>
    )
};

export default InteractContract;

