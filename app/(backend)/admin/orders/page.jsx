'use client';

import React, { useEffect, useState } from 'react';
import { createMRTColumnHelper } from 'material-react-table';
import toast from 'react-hot-toast';
import EnqTable from '../dashboard/EnqTable';

export default function HotelOrders() {
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [rangeValue, setRangeValue] = useState('allData');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let url = `/api/orders`;

        if (rangeValue === 'Between' && dateRange.startDate && dateRange.endDate) {
          url += `?rangeValue=${rangeValue}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`;
        } else if (rangeValue !== 'Between' && rangeValue !== 'allData') {
          url += `?rangeValue=${rangeValue}`;
        } else {
          url += `?rangeValue=allData`;
        }

        const res = await fetch(url);

        if (!res.ok) throw new Error('Failed to load');

        const result = await res.json();

        if (result.orders) {
          const mapped = result.orders.map((item) => ({
            ...item,
            date: item.createdAt,
          }));

          setOrders(mapped);

          if (mapped.length === 0) toast.error('No Orders Found');
          else toast.success('Orders Loaded Successfully');
        } else {
          setOrders([]);
          toast.error('Failed to Fetch Orders');
        }
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong');
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshing, rangeValue, dateRange.startDate, dateRange.endDate]);

  const columnHelper = createMRTColumnHelper();

  const columns = [
    {
      header: 'S.No',
      size: 60,
      accessorFn: (row, index) => index + 1,
      cell: (info) =>
        info.row.index +
        1 +
        info.table.getState().pagination.pageIndex *
        info.table.getState().pagination.pageSize,
    },

    columnHelper.accessor('name', { header: 'Name', size: 140 }),
    columnHelper.accessor('phone', { header: 'Phone', size: 120 }),
    columnHelper.accessor('room', { header: 'Room No', size: 100 }),

    columnHelper.accessor('product', { header: 'Product', size: 140 }),
    columnHelper.accessor('qty', { header: 'Quantity', size: 80 }),

    columnHelper.accessor('createdAt', {
      header: 'Date',
      size: 120,
      cell: (info) =>
        new Date(info.getValue()).toISOString().split('T')[0],
    }),
  ];

  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2 rounded-lg mr-2 mt-1">
      <div className="px-4 min-h-40">
        <h5 className="my-4 text-xl uppercase text-primaryBlue">Hotel Orders</h5>

        <EnqTable
          data={orders}
          columns={columns}
          fileName="Hotel Orders"
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          dateRange={dateRange}
          setDateRange={setDateRange}
          refreshing={refreshing}
          setRefreshing={setRefreshing}
          loading={loading}
        />
      </div>
    </div>
  );
}
