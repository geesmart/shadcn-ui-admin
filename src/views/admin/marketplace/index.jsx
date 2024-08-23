import { Setting } from "@/views/admin/marketplace/components/setting.jsx";
import NtfTrending from "@/components/nft/ntf-trending.jsx";
import NtfBanner from "@/components/nft/ntf-banner.jsx";
import NtfRecentAdd from "@/components/nft/ntf-recent-add.jsx";
import TopCreators from "@/components/nft/top-creators.jsx";
import NtfHistory from "@/components/nft/ntf-history.jsx";


export default function NFTMarketplace(props) {

    return (
        <div className="py-4 grid h-full gap-5 grid-cols-3">

            <div className="h-fit w-full col-span-2 space-y-10">
                <NtfBanner />
                <NtfTrending className='mt-2' />
                <NtfRecentAdd />
            </div>

            <div className="col-span-1 h-full w-full rounded-xl space-y-6">
                <TopCreators />
                <NtfHistory />
            </div>

        </div>
    )
}
