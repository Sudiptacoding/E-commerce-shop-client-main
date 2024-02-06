import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts'
import useAllPement from '../../hooks/useAllPement';
import UseMenus from '../../hooks/UseMenus';
import moment from 'moment';
import useAllUsers from '../../hooks/useAllUsers';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        const menus = props.menus
        const categoris = props.categoris

        const prices = categoris.map((category, index) => {
            const filteredMenus = menus?.filter(menu => menu.category.includes(category));
            const pricesArray = filteredMenus.map(menu => parseInt(menu.price));
            return pricesArray;
        });


        this.state = {
            series: [
                {
                    name: 'hoodie',
                    data: prices?.[0]
                },
                {
                    name: 'shirt',
                    data: prices?.[1]
                },
                {
                    name: 't-shirt',
                    data: prices?.[2]
                },
                {
                    name: 'cap',
                    data: prices?.[3]
                },
                {
                    name: 'beg',
                    data: prices?.[4]
                },


            ],


            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
             
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}


class ApexChart1 extends React.Component {
    constructor(props) {
        super(props);
        const allpement = props.allpement
        const categoris = props.categoris

        const prices = categoris.map((category, index) => {
            const filteredMenus = allpement?.filter(menu => menu.category.includes(category));
            const pricesArray = filteredMenus?.map(menu => parseInt(menu.price));
            return pricesArray;
        });

        this.state = {

            series: [
                {
                    name: 'hoodie',
                    data: prices?.[0]
                },
                {
                    name: "shirt",
                    data: prices?.[1]
                },
                {
                    name: "t-shirt",
                    data: prices?.[2]
                },
                {
                    name: "cap",
                    data: prices?.[3]
                },
                {
                    name: "beg",
                    data: prices?.[4]
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
            },


        };
    }



    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}



class App extends Component {
    constructor(props) {
        super(props);
        const categoris = props.categori
        const allpement = props.allpement
        const filteredMenus = allpement?.filter(menu => menu.category.includes(categoris));
        const pricesArray = filteredMenus?.map(menu => parseInt(menu.price));
        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: [categoris]
                }
            },
            series: [
                {
                    name: categoris,
                    data: pricesArray
                }

            ]
        }
    }
    render() {
        return (
            <Chart className='overflow-x-scroll no-scrollbar' options={this.state.options} series={this.state.series} type="bar" height={320} />
        )
    }
}

const AdminHome = () => {
    const { isPending, error, allpement, refetch } = useAllPement()
    const [menus] = UseMenus()
    const { alluser } = useAllUsers()

    const categoris = ['hoodie', 'shirt', 't-shirt', 'cap', 'beg']
    const currentTime = moment().format("MMM Do YY")
    const totalPrice = menus?.reduce((accumulator, item) => accumulator + parseInt(item.price), 0);
    const totalSell = allpement?.reduce((accumulator, item) => accumulator + parseInt(item?.price * item?.quantity), 0);

    return (
        <div className='w-full'>
            <div className="flex items-center justify-center shadow stats">

                <div className="stat place-items-center">
                    <div className="stat-title">Total product amount</div>
                    <div className="stat-value">$ {totalPrice}</div>
                    <div className="stat-desc">{currentTime}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total sell price</div>
                    <div className="stat-value text-secondary">$ {totalSell}</div>
                    <div className="stat-desc text-secondary">↗︎ {totalPrice} ({((totalPrice / totalSell) * 100).toFixed(2)}%)</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">{alluser?.length}</div>
                    <div className="stat-desc">Total {alluser?.length} user visit </div>
                </div>

            </div>
            <div className="">
                <div className='py-10 text-center'><p className='font-mono text-2xl font-bold'>Product Details</p></div>
                <div className='w-full border'>
                    <div className="">
                        <div className='grid w-full grid-cols-2 overflow-y-auto lg:grid-cols-4 md:grid-cols-3'>
                            {categoris.map((category, index) => {
                                const filteredMenus = menus?.filter(menu => menu.category.includes(category));
                                return (
                                    <div key={index}>
                                        <div className="border stat">
                                            <div className="stat-figure text-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            </div>
                                            <div className="stat-title">{category.toUpperCase()}</div>
                                            <div className="stat-value text-secondary">{filteredMenus?.length} Items</div>
                                            <div className="stat-desc">{(filteredMenus?.length / 100) * menus?.length}% because total items {menus?.length}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='py-10 text-center'><p className='font-mono text-2xl font-bold'>Sell Details</p></div>
                <div className='w-full border'>
                    <div className="">
                        <div className='grid w-full grid-cols-2 overflow-y-auto lg:grid-cols-4 md:grid-cols-3'>
                            {categoris.map((category, index) => {
                                const filteredMenus = allpement?.filter(menu => menu.category.includes(category));
                                const totalQuantity = filteredMenus?.reduce((accumulator, item) => accumulator + parseInt(item.quantity), 0);
                                return (
                                    <div key={index}>

                                        <div className="stat">
                                            <div className="stat-figure text-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            </div>
                                            <div className="font-bold stat-title">{category.toUpperCase()}</div>
                                            <div className="stat-value ">{totalQuantity} Items</div>
                                            <div className="stat-desc text-secondary">{(filteredMenus?.length / 100) * menus?.length}% because total items {menus?.length}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
            <ApexChart allpement={allpement} menus={menus} categoris={categoris} />
            <ApexChart1 allpement={allpement} menus={menus} categoris={categoris} />
            <div className=''>
                {
                    categoris?.map((item, i) => {
                        return <App key={i} allpement={allpement} menus={menus} categori={item} />
                    })
                }
            </div>
        </div>
    );
};

export default AdminHome;

