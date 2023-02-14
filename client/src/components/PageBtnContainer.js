import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const PageBtnContainer = () => {
	const { numOfPages, page, changePage } = useAppContext();

	const prevPage = () => {
		changePage(page - 1);
	};

	const nextPage = () => {
		// let newPage = page - 1;
		// if (newPage < 1) {
		// 	newPage = numOfPages;
		// }
		changePage(page + 1);
	};

	const pages = Array.from({ length: numOfPages }, (_, index) => {
		return index + 1;
	});

	const prevDisabled = page === 1 || numOfPages === 1;
	const nextDisabled = page === numOfPages || numOfPages === 1;

	return (
		<Wrapper>
			{!prevDisabled && (
				<button
					className='prev-btn'
					onClick={() => prevPage()}
					type='button'
				>
					<HiChevronDoubleLeft />
					prev
				</button>
			)}
			<div className='btn-container'>
				{pages.map((pageNumber, i) => {
					return (
						<button
							key={i}
							className={
								pageNumber === page
									? 'pageBtn active'
									: 'pageBtn'
							}
							type='button'
							onClick={() => changePage(pageNumber)}
						>
							{pageNumber}
						</button>
					);
				})}
			</div>
			{!nextDisabled && (
				<button
					className='next-btn'
					onClick={() => nextPage()}
					disabled={nextDisabled}
				>
					<HiChevronDoubleRight />
					next
				</button>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	height: 6rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: end;
	flex-wrap: wrap;
	gap: 1rem;
	.btn-container {
		background: var(--primary-100);
		border-radius: var(--borderRadius);
	}
	.pageBtn {
		background: transparent;
		border-color: transparent;
		width: 50px;
		height: 40px;
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--primary-500);
		transition: var(--transition);
		border-radius: var(--borderRadius);
		cursor: pointer;
	}
	.active {
		background: var(--primary-500);
		color: var(--white);
	}
	.prev-btn,
	.next-btn {
		width: 100px;
		height: 40px;
		background: var(--white);
		border-color: transparent;
		border-radius: var(--borderRadius);
		color: var(--primary-500);
		text-transform: capitalize;
		letter-spacing: var(--letterSpacing);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: var(--transition);
	}
	.prev-btn:hover,
	.next-btn:hover {
		background: var(--primary-500);
		color: var(--white);
	}
`;

export default PageBtnContainer;
