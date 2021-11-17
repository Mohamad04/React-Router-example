import React from "react";

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg width="35" height="35" viewBox="0 0 856 856" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="350" width="266" height="320"><path d="M0 350.345H265.433V669.617H0V350.345Z" fill="white" />
                    </mask>
                        <g mask="url(#mask0)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M265.433 435.703L31.427 669.617C18.2083 620.947 8.83711 569.291 4.02783 515.537C1.31631 486.91 -0.00280762 457.67 -0.00280762 427.989C-0.00280762 401.735 1.05065 375.82 3.24002 350.345C100.058 353.762 189.968 384.752 265.433 435.703Z"
                                fill="#6633FF" />
                        </g>
                        <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="157" y="571" width="331" height="285">
                            <path d="M157.399 571.827H487.353V855.996H157.399V571.827Z" fill="white" />
                        </mask>
                        <g mask="url(#mask1)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M487.353 852.14V854.155C467.831 855.383 448.045 855.996 428.001 855.996C398.321 855.996 369.09 854.677 340.463 851.966C277.686 846.369 217.804 834.634 162.218 817.568C160.55 817.037 158.975 816.597 157.399 816.075L401.656 571.827C455.758 651.936 487.353 748.406 487.353 852.14Z"
                                fill="#6633FF" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M688.884 315.855C665.772 338.958 635.478 350.427 605.184 350.427C574.817 350.427 544.523 338.958 521.411 315.855C475.279 269.714 475.279 194.606 521.411 148.474C567.635 102.25 642.743 102.25 688.884 148.474C735.017 194.606 735.017 269.714 688.884 315.855ZM784.209 71.8644C682.316 26.4282 559.748 0 428.001 0C296.254 0 173.687 26.4282 71.7847 71.8644C59.4455 99.6208 48.4986 128.861 39.1274 159.503C205.638 172.365 355.954 244.247 469.15 354.284C469.407 354.458 469.673 354.723 470.021 355.072C474.143 359.011 478.256 363.124 482.278 367.328C482.543 367.585 482.809 367.86 483.065 368.208C598.36 486.654 671.717 645.891 679.247 821.847C716.109 811.44 751.213 798.835 784.126 784.124C829.563 682.222 856 559.745 856 427.989C856 296.243 829.563 173.766 784.209 71.8644Z"
                            fill="#6633FF" />
                    </svg>
                    <span class="ml-3 text-xl">React</span>
                </span>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-purple-900" href="/">Home</a>
                    <a class="mr-5 hover:text-purple-900" href="/About">About</a>
                    <a class="mr-5 hover:text-purple-900" href="/Users">Users</a>
                </nav>

            </div>
        </header>



    )
}

export default Navbar;