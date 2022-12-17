import React from 'react';
import { Helmet } from 'react-helmet';
import Book from './book'
import Navbar from './navbar'

const books = [
    {
        id: 0,
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        image: 'https://kbimages1-a.akamaihd.net/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/353/569/90/False/rich-dad-poor-dad-24.jpg',
        discription: `The #1 personal finance book of all time... translated into dozens of languages and sold around the world.

        Rich Dad Poor Dad is Robert's story of growing up with two dads - his real father and the father of his best friend, his rich dad - and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you. 
        
        20 Years... 20/20 Hindsight
        In the 20th anniversary edition of this classic, Robert offers an update on what we’ve seen over the past 20 years related to money, investing, and the global economy. Sidebars throughout the book will take listeners “fast forward” - from 1997 to today - as Robert assesses how the principles taught by his rich dad have stood the test of time. 
        
        In many ways, the messages of Rich Dad Poor Dad, messages that were criticized and challenged two decades ago, are more meaningful, relevant and important today than they were 20 years ago. 
        
        As always, listeners can expect that Robert will be candid, insightful... and continue to rock more than a few boats in his retrospective. 
        
        Will there be a few surprises? Count on it. `
    },
    {
        id: 1,
        title: 'Harry Potter and the Order of the Phoenix: The Illustrated Edition (Harry Potter, Book 5) (Illustrated edition)',
        author: 'J. K. Rowling ',
        image: 'https://m.media-amazon.com/images/I/51bZujlJxlL._SX422_BO1,204,203,200_.jpg',
        discription: `There is a door at the end of a silent corridor. And it's haunting Harry Potter's dreams. Why else would he be waking in the middle of the night, screaming in terror? It's not just the upcoming O.W.L. exams; a new teacher with a personality like poisoned honey; a venomous, disgruntled house-elf; or even the growing threat of He-Who-Must-Not-Be-Named. Now Harry Potter is faced with the unreliability of the very government of the magical world and the impotence of the authorities at Hogwarts. Despite this (or perhaps because of it), he finds depth and strength in his friends, beyond what even he knew; boundless loyalty; and unbearable sacrifice.
        This stunning illustrated edition brings together the talents of award-winning artists Jim Kay and Neil Packer in a visual feast, featuring iconic scenes and much loved characters -- Tonks, Luna Lovegood, and many more -- as the Order of the Phoenix keeps watch over Harry Potter’s fifth year at Hogwarts. With its oversized format, high-quality paper, ribbon bookmark, and color on nearly every page, this edition is the perfect gift for Harry Potter fans and book lovers of all ages.`
    },
    {
        id: 2,
        title: 'Devotion: An Epic Story of Heroism, Friendship, and Sacrifice ',
        author: 'Adam Makos',
        image: 'https://m.media-amazon.com/images/I/51OZ95hD4dL._SX322_BO1,204,203,200_.jpg',
        discription: `Devotion tells the inspirational story of the U.S. Navy’s most famous aviation duo, Lieutenant Tom Hudner and Ensign Jesse Brown, and the Marines they fought to defend. A white New Englander from the country-club scene, Tom passed up Harvard to fly fighters for his country. An African American sharecropper’s son from Mississippi, Jesse became the navy’s first Black carrier pilot, defending a nation that wouldn’t even serve him in a bar.

        While much of America remained divided by segregation, Jesse and Tom joined forces as wingmen in Fighter Squadron 32. Adam Makos takes us into the cockpit as these bold young aviators cut their teeth at the world’s most dangerous job—landing on the deck of an aircraft carrier—a line of work that Jesse’s young wife, Daisy, struggles to accept.
        
        Deployed to the Mediterranean, Tom and Jesse meet the Fleet Marines, boys like PFC “Red” Parkinson, a farm kid from the Catskills. In between war games in the sun, the young men revel on the Riviera, partying with millionaires and even befriending the Hollywood starlet Elizabeth Taylor. Then comes the conflict that no one expected: the Korean War.
        
        Devotion takes us soaring overhead with Tom and Jesse, and into the foxholes with Red and the Marines as they battle a North Korean invasion. As the fury of the fighting escalates and the Marines are cornered at the Chosin Reservoir, Tom and Jesse fly, guns blazing, to try and save them. When one of the duo is shot down behind enemy lines and pinned in his burning plane, the other faces an unthinkable choice: watch his friend die or attempt history’s most audacious one-man rescue mission.`
    },
    {
        id: 3,
        title: 'The 48 Laws of Power ',
        author: 'Robert T. Kiyosaki',
        image: 'https://m.media-amazon.com/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        discription: `In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.
 
        Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”), and many recommend absolute self-preservation (“Law 15: Crush Your Enemy Totally”). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game.`
    },
    {
        id: 4,
        title: 'Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century (Think and Grow Rich Series)',
        author: 'Napoleon Hill',
        image: 'https://m.media-amazon.com/images/I/51bhhK6yobL._SX331_BO1,204,203,200_.jpg',
        discription: `Think and Grow Rich has been called the "Granddaddy of All Motivational Literature." It was the first book to boldly ask, "What makes a winner?" The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself.
        The most famous of all teachers of success spent "a fortune and the better part of a lifetime of effort" to produce the "Law of Success" philosophy that forms the basis of his books and that is so powerfully summarized in this one.
        
        In the original Think and Grow Rich, published in 1937, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles. In the updated version, Arthur R. Pell, Ph.D., a nationally known author, lecturer, and consultant in human resources management and an expert in applying Hill's thought, deftly interweaves anecdotes of how contemporary millionaires and billionaires, such as Bill Gates, Mary Kay Ash, Dave Thomas, and Sir John Templeton, achieved their wealth. Outmoded or arcane terminology and examples are faithfully refreshed to preclude any stumbling blocks to a new generation of readers.`
    },

]

const BookList = () => {
    return (
        <>
            <Helmet>
                <title>React Projects | Book Library </title>
            </Helmet>
            <header><Navbar /></header>
            <main className='p-4 text-center container bg-white'>
                <div className="row row-cols-xl-4 row-cols-1 row-cols-sm-3 gap-5 justify-content-center">
                    {books.map((book, index) => {
                        return (
                            <Book key={book.id} books={book} />
                        )
                    })}
                </div>

            </main>
        </>

    );
}

export default BookList;