function super_reduced_string(s) {
   const result = s.sort().reduce((acc, curr) => {
       const length = acc.length;
       var regex = new RegExp(`{curr}`, 'g');
       var found = s.match(regex);
       
       if (found.length % 2 === 1 || length === 0 || accumulator[length - 1] !== current) {
           acc.concat(curr);
       }
   }, []);
}
