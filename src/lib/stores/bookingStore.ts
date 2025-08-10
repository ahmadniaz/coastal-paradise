import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  totalPrice: number;
  isLoading: boolean;
  error: string | null;
}

export interface BookingActions {
  setCheckIn: (date: Date | null) => void;
  setCheckOut: (date: Date | null) => void;
  setGuests: (count: number) => void;
  setTotalPrice: (price: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  resetBooking: () => void;
  calculateTotalPrice: () => void;
}

const initialState: BookingState = {
  checkIn: null,
  checkOut: null,
  guests: 1,
  totalPrice: 0,
  isLoading: false,
  error: null,
};

export const useBookingStore = create<BookingState & BookingActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      setCheckIn: (date) => {
        set({ checkIn: date });
        get().calculateTotalPrice();
      },
      
      setCheckOut: (date) => {
        set({ checkOut: date });
        get().calculateTotalPrice();
      },
      
      setGuests: (count) => {
        set({ guests: Math.max(1, Math.min(6, count)) });
        get().calculateTotalPrice();
      },
      
      setTotalPrice: (price) => set({ totalPrice: price }),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      setError: (error) => set({ error }),
      
      resetBooking: () => set(initialState),
      
      calculateTotalPrice: () => {
        const { checkIn, checkOut, guests } = get();
        const basePrice = 250; // Base price per night
        
        if (!checkIn || !checkOut) {
          set({ totalPrice: 0 });
          return;
        }
        
        const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
        const guestMultiplier = guests > 4 ? 1.2 : 1; // 20% increase for more than 4 guests
        
        const total = nights * basePrice * guestMultiplier;
        set({ totalPrice: total });
      },
    }),
    {
      name: 'coastal-paradise-booking',
      partialize: (state) => ({
        checkIn: state.checkIn,
        checkOut: state.checkOut,
        guests: state.guests,
      }),
      // Add storage configuration to prevent hydration issues
      storage: {
        getItem: (name) => {
          if (typeof window === 'undefined') return null;
          const str = window.localStorage.getItem(name);
          if (!str) return null;
          try {
            const data = JSON.parse(str);
            // Convert date strings back to Date objects
            if (data.state) {
              if (data.state.checkIn) data.state.checkIn = new Date(data.state.checkIn);
              if (data.state.checkOut) data.state.checkOut = new Date(data.state.checkOut);
            }
            return data;
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          if (typeof window === 'undefined') return;
          window.localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          if (typeof window === 'undefined') return;
          window.localStorage.removeItem(name);
        },
      },
    }
  )
);
