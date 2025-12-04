'use client';
import React, { useEffect, useState } from 'react';
import { createMRTColumnHelper } from 'material-react-table';
import toast from 'react-hot-toast';
import EnqTable from '../dashboard/EnqTable';

export default function HotelBookings() {
  const [bookingData, setBookingData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rangeValue, setRangeValue] = useState('allData');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let url = `/api/bookings`;

        if (rangeValue === 'Between' && dateRange.startDate && dateRange.endDate) {
          url += `?rangeValue=${rangeValue}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`;
        } else if (rangeValue !== 'Between' && rangeValue !== 'allData') {
          url += `?rangeValue=${rangeValue}`;
        } else {
          url += `?rangeValue=allData`;
        }

        const response = await fetch(url);

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();

        if (result.bookings) {
          const mappedData = result.bookings.map((item) => ({
            ...item,
            date: item.createdAt,
          }));

          setBookingData(mappedData);

          if (mappedData.length === 0) toast.error('No bookings found');
          else toast.success('Hotel Bookings fetched successfully');
        } else {
          toast.error('Failed to fetch booking data');
          setBookingData([]);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        toast.error('Something went wrong while fetching bookings');
        setBookingData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshing, rangeValue, dateRange.startDate, dateRange.endDate]);

  // TABLE COLUMNS
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

    columnHelper.accessor('name', { header: 'Name', size: 120 }),
    columnHelper.accessor('email', { header: 'Email', size: 130 }),
    columnHelper.accessor('phone', { header: 'Phone', size: 120 }),

    columnHelper.accessor('checkIn', {
      header: 'Check-In',
      size: 120,
      cell: (info) => new Date(info.getValue()).toISOString().split('T')[0],
    }),

    columnHelper.accessor('checkOut', {
      header: 'Check-Out',
      size: 120,
      cell: (info) => new Date(info.getValue()).toISOString().split('T')[0],
    }),

    columnHelper.accessor('adults', { header: 'Adults', size: 80 }),
    columnHelper.accessor('children', { header: 'Children', size: 80 }),

    columnHelper.accessor('roomTitle', { header: 'Room Title', size: 180 }),
    columnHelper.accessor('category', { header: 'Category', size: 140 }),
    columnHelper.accessor('price', { header: 'Price', size: 80 }),

    columnHelper.accessor('createdAt', {
      header: 'Created At',
      size: 120,
      cell: (info) => new Date(info.getValue()).toISOString().split('T')[0],
    }),
  ];

  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2 rounded-lg mr-2 mt-1">
      <div className="px-4 min-h-40">
        <h5 className="my-4 text-xl uppercase text-primaryBlue">
          Hotel Bookings
        </h5>

        <EnqTable
          data={bookingData}
          columns={columns}
          fileName="Hotel Bookings"
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
